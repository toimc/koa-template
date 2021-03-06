import send from '@/config/MailConfig'
import bcrypt from 'bcrypt'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '@/config'
import { checkCode } from '@/common/Utils'
import User from '@/model/User'

class LoginController {
  async forget (ctx) {
    const { body } = ctx.request
    try {
      // body.username -> database -> email
      let result = await send({
        code: '1234',
        expire: moment()
          .add(30, 'minutes')
          .format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: 'Brian',
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功',
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export default new LoginController()
