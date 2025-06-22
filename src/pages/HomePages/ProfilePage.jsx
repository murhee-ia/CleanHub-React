import PageTitle from '../../components/HomeComponents/PageTitle';
import profileStyles from './HomePages.module.css';

const ProfilePage = () => {
  return (
    <div className={profileStyles['home-page']}>
      <div className={profileStyles['page-header']}>
        <PageTitle title="Hello, Welcome!" subtitle="Browse cleaning jobs to your heart's content!" />
      </div>
      <div className={profileStyles['page-body']}>

      </div>
    </div>
  )
}

export default ProfilePage