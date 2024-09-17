import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { UserDocument } from './users/model/user.schema';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-paylod.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: UserDocument, response: Response) {
    const payload: JwtPayload = {
      userId: user._id.toHexString(),
    };
    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );

    const token = this.jwtService.sign(payload);
    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
  }
}
