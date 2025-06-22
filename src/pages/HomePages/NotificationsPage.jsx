import PageTitle from '../../components/HomeComponents/PageTitle';
import notificationStyles from './HomePages.module.css';

const NotificationsPage = () => {
  return (
    <div className={notificationStyles['home-page']}>
      <div className={notificationStyles['page-header']}>
        <PageTitle title="Notifications" subtitle="View notifications to stay updated." />
      </div>
      <div className={notificationStyles['page-body']}>

      </div>
    </div>
  )
}

export default NotificationsPage