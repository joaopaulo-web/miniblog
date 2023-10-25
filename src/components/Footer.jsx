import styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>João Paulo Dev &copy; 2023</p>
      <div className={styles.redes_footer}>
       <p>
          <a href="https://www.linkedin.com/in/joao-paulo-web/"> Linkedin</a> 
        </p>
        <p>
          <a href="https://github.com/joaopaulo-web"> GitHub</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer