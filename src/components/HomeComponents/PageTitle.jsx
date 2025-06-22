import titleStyles from './HomeComponents.module.css'

const PageTitle = ({title, subtitle}) => {
  return (
    <section className={titleStyles["page-title"]}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </section>
  )
}

export default PageTitle