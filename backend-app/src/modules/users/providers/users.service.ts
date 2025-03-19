import { UserNotFoundException } from '@exceptions/userExceptions/userNotFoundException';
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { UsersEntity } from '@entity/main/user.entity';
import { UserVerificationEntity } from '@entity/main/userVerification.entity';
import { DataSource } from 'typeorm';
import { CompanyEntity } from '@entity/shared/company.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  /**
   * Fetches all user entities from the database.
   * @returns {Promise<UsersEntity[]>} A promise that resolves to an array of all user entities.
   */
  async findAll(): Promise<UsersEntity[]> {
    return await this.dataSource.getRepository(UsersEntity).find();
  }

  /**
   * Fetches a user entity by its unique identifier.
   * @param {string} id - The unique identifier of the user.
   * @returns {Promise<UsersEntity>} A promise that resolves to the user entity with the given ID.
   */
  async findOneById(id: string): Promise<UsersEntity> {
    return await this.dataSource
      .getRepository(UsersEntity)
      .findOne({ where: { id } });
  }

  /**
   * Fetches a user entity by its email address.
   * Uses a query builder to perform a custom query on the database.
   * @param {string} email - The email address of the user.
   * @returns {Promise<UsersEntity | null>} A promise that resolves to the user entity with the given email, or null if not found.
   */
  async findOneByEmail(email: string): Promise<UsersEntity | null> {
    return this.dataSource
      .getRepository(UsersEntity)
      .createQueryBuilder('user')
      .where("user.useremail ->> 'email' = :email", { email }) // Filters by the 'email' key in the 'useremail' JSON column.
      .getOne();
  }

  /**
   * Fetches a user entity by its phone number.
   * Uses a query builder to perform a custom query on the database.
   * @param {string} phone - The phone number of the user.
   * @returns {Promise<UsersEntity | null>} A promise that resolves to the user entity with the given phone, or null if not found.
   */
  async findOneByPhone(phone: string): Promise<UsersEntity | null> {
    return this.dataSource
      .getRepository(UsersEntity)
      .createQueryBuilder('user')
      .where('user.phone = :phone', { phone }) // Filters by the 'phone' key in the 'phone' column.
      .getOne();
  }

  /**
   * Gets the primary company for a user.
   * @param {string} userId - The ID of the user.
   * @returns {Promise<CompanyEntity | null>} The user's primary company, or null if not found.
   */
  async getUserPrimaryCompany(userId: string): Promise<CompanyEntity | null> {
    return this.dataSource
      .getRepository(CompanyEntity)
      .createQueryBuilder('company')
      .where('company.user_id = :userId', { userId })
      .andWhere('company.is_primary = :isPrimary', { isPrimary: true })
      .getOne();
  }

  /**
   * Adds a trusted IP address to the user's trusted IP list.
   * @param userId - The ID of the user to update.
   * @param ip - The IP address to add.
   * @returns Updated user entity.
   * @throws NotFoundException if the user is not found.
   */
  async addTrustedIp(userId: string, ip: string): Promise<UsersEntity> {
    const user = await this.dataSource
      .getRepository(UsersEntity)
      .findOne({ where: { id: userId } });

    if (!user) {
      throw new UserNotFoundException();
    }

    // Check if the IP is already trusted
    const isAlreadyTrusted = user.trusted_ip_address.some(
      (entry) => entry.ip === ip,
    );

    if (isAlreadyTrusted) {
      return user;
    }
    user.trusted_ip_address.push({ ip, trusted: true });
    return await this.dataSource.getRepository(UsersEntity).save(user);
  }

  async getUserVerificationToken(
    userId: string,
    verificationType: string,
  ): Promise<UserVerificationEntity> {
    return await this.dataSource.getRepository(UserVerificationEntity).findOne({
      where: { user_id: userId, verification_type: verificationType },
      relations: ['user'],
    });
  }

  async findOne(id: string): Promise<UsersEntity | null> {
    return await this.dataSource
      .getRepository(UsersEntity)
      .findOne({ where: { id } });
  }

  async updatePassword(userId: string, hashedPassword: string): Promise<void> {
    await this.dataSource
      .getRepository(UsersEntity)
      .update(userId, { password: hashedPassword });
  }

  async update2FAConfig(
    userId: string,
    config: {
      is_configured: boolean;
      created_at: Date;
      secret: {
        ascii: string;
        hex: string;
        base32: string;
        otpauth_url: string;
      };
      recovery_codes: Array<{ code: string; active: boolean }>;
      attempts: number;
    },
  ): Promise<void> {
    await this.dataSource
      .getRepository(UsersEntity)
      .update(userId, { two_fact_auth: config });
  }

  async increment2FAAttempts(userId: string): Promise<void> {
    const user = await this.findOne(userId);
    if (user) {
      user.two_fact_auth.attempts += 1;
      await this.dataSource.getRepository(UsersEntity).save(user);
    }
  }

  async reset2FAAttempts(userId: string): Promise<void> {
    const user = await this.findOne(userId);
    if (user) {
      user.two_fact_auth.attempts = 0;
      await this.dataSource.getRepository(UsersEntity).save(user);
    }
  }

  async verifyEmail(userId: string): Promise<void> {
    const user = await this.findOne(userId);
    if (user) {
      user.useremail.is_verified = true;
      await this.dataSource.getRepository(UsersEntity).save(user);
    }
  }
}
