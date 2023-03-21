import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import NotFoundStyle from './NotFound.module.css'

export default function NotFound () {
  return(
    <div className={NotFoundStyle.wrapper}>
      <p className={`${NotFoundStyle.title} text`}>404</p>
      <h2 className={`text text_type_main-large mt-10`}>Страница не найдена</h2>
      <Link to='/'>
      <Button htmlType="button" type="secondary" size="medium">На главную</Button>
      </Link>
    </div>
  )
}
