import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifyCallback } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "CnpG95vCX0zv5MONkDxXML9UaQ1Fc8u2-",                                          // Our secret key for jwt
        });
    }

    async validate(payload, done: VerifyCallback,): Promise<any> {
        try {
            done(null, payload);
        } catch (err) {
            throw new UnauthorizedException('unauthorized', err.message);
        }
    }
}