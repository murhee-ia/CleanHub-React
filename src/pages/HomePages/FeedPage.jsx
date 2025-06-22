import PageTitle from '../../components/HomeComponents/PageTitle'
import feedStyles from './HomePages.module.css'

const FeedPage = () => {
  return (
    <div className={feedStyles['home-page']}>
      <div className={feedStyles['page-header']}>
        <PageTitle title="Hello, Welcome!" subtitle="Browse cleaning jobs to your heart's content!" />
      </div>
      <div className={feedStyles['page-body']}>

      </div>
    </div>
  )
}

export default FeedPage