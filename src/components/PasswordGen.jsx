import { useState } from 'react'
import styles from './styles.module.css'

function PasswordGen() {
   
   const caracters = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      '!', '@', '#', '$', '&', '*', '-', '_', '?'
    ];

   // ========= Generate and display new password ==============
    let newPassword = []
    const [password, setPassword] = useState()
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)
    
    const generateNewPassword = () => {
       
       for (let i = 0; i < 10; i++) {
          let randomNumber = Math.floor(Math.random() * caracters.length)
          newPassword.push(caracters[randomNumber])
          
         }
         setPassword(newPassword.join(''))
         setIsPasswordGenerated(true)
         setCopyButton(false)
      }     
   // =========================================================
      
   // ================== copy to clipboard ====================
   const [copyButton, setCopyButton] = useState(false)

   const copyPassword = () => {
      if (!isPasswordGenerated) {
         alert('Gere uma senha antes de copiá-la')
      }else {
         navigator.clipboard.writeText(password)            
         setCopyButton(true)
      }    
   }
   // =========================================================

   return(
      <div className={styles.mainContent}>
         <h1 className={styles.title}>Gerador de senhas</h1>
         <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={generateNewPassword}>Gerar!</button>
            <button className={styles.button} onClick={copyPassword}>{copyButton ? 'Copiado' : 'Copiar'}</button>
         </div>
         <p className={styles.password}>{password}</p>
      </div>
   )
}

export default PasswordGen