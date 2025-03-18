import { Injectable } from '@nestjs/common';
import mjml2html from 'mjml';
import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';

@Injectable()
export class MjmlService {
  private templatesDir: string;

  constructor() {
    this.templatesDir = path.join(
      __dirname,
      '../../communication/templates/email-templates',
    );
    this.registerHandlebarsPartials();
  }

  private registerHandlebarsPartials(): void {
    const partialsDir = path.join(this.templatesDir, 'partials');
    if (fs.existsSync(partialsDir)) {
      fs.readdirSync(partialsDir).forEach((filename) => {
        if (filename.endsWith('.mjml')) {
          const filePath = path.join(partialsDir, filename);
          const content = fs.readFileSync(filePath, 'utf8');
          const partialName = path.basename(filename, '.mjml');
          // Compile the MJML partial to HTML
          const mjmlResult = mjml2html(content);
          Handlebars.registerPartial(partialName, mjmlResult.html);
        }
      });
    }
  }

  public async compileTemplate(
    templateName: string,
    context: any,
  ): Promise<string> {
    try {
      const templatePath = path.join(this.templatesDir, `${templateName}.mjml`);
      if (!fs.existsSync(templatePath)) {
        throw new Error(`Template ${templateName}.mjml not found`);
      }

      // Read the MJML template
      const mjmlContent = fs.readFileSync(templatePath, 'utf8');

      // Compile MJML to HTML
      const { html, errors } = mjml2html(mjmlContent);
      if (errors && errors.length > 0) {
        console.error('MJML compilation errors:', errors);
        throw new Error(
          `Failed to compile MJML template: ${errors[0].message}`,
        );
      }

      // Compile the HTML with Handlebars to inject the context
      const template = Handlebars.compile(html);
      return template(context);
    } catch (error) {
      console.error('Error compiling template:', error);
      throw error;
    }
  }
}
