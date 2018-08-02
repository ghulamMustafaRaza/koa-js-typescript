import * as rp from 'request-promise';

export class UserController {
    index = async (ctx) => {
        let user = await rp({uri: 'https://randomuser.me/api/', json: true})
        .then(function (user) {
            console.log('User %d ', JSON.stringify(user));
            return { body: user, status: 200 }
        })
        .catch(function (err) {
            // API call failed...
            return { body: err.message, status: 500 }
        });
        ctx.status = user.status
        ctx.body = user

        return ctx;
    }
}

