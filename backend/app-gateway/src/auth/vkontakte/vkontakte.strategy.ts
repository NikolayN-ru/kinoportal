import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-vkontakte';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VkontakteStrategy extends PassportStrategy(Strategy, 'vkontakte') {
    constructor() {
        super({
            clientID: "51628818",
            clientSecret: "PhCRfWyvCpC8nWFTR7lL",
            callbackURL: 'http://localhost:3000/auth/vkontakte/callback',
            scope: ['email', 'profile']
        }, function ( accessToken: string,
                      refreshToken: string,
                      profile: any,
                      done: VerifyCallback) {
            const { username, emails, photos } = profile;
            const user = {
                email: emails[0].value,
                username: username,
                picture: photos[0].value,
                accessToken,
                refreshToken,
            };
            done(null, user)
        });
    }
}