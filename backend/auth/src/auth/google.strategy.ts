import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly authService: AuthService) {
        super({
            clientID: "757439854301-3ei143crd6qamq033pgttltf9bgq3uit.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL:  'http://localhost:3000/auth/google-redirect',
            scope: ['email', 'profile'],                                                                         // return email and profile info from google OAuth 2.0
            passReqToCallback: true,
        });
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done: VerifyCallback,): Promise<any> {
        try {
            const jwt: string = await this.authService.validateOAuthLogin(
                profile.id,
                Provider.GOOGLE,
                profile.name,
                profile.emails,
                profile.photos[0].value
            );
            const user = {
                jwt
            };
            done(null, user);
        } catch (err) {
            done(err, false);
        }
    }
}