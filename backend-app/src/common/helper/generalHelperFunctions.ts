import * as bcrypt from 'bcrypt';

export const GeneralHelperFunctions = {
  generateSixDigitOTP: (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  },
  generateSaltedPassword: async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  },
  generateRandomString: (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};
