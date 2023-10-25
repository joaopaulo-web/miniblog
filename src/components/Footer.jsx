import styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>João Paulo Dev &copy; 2023</p>
      <div className={styles.redes_footer}>
       <p>
          <a href="https://www.linkedin.com/in/joao-paulo-web/"> <img src="src/assets/linkedin.svg" alt="Ícone Linkedin"/> Linkedin</a> 
        </p>
        <p>
          <a href="https://github.com/joaopaulo-web"> <img src="src/assets/github.svg" alt="Ícone GitHub"/> GitHub</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer