
function cipher(p, c){


   return 
}

function caesarCipher(string, key){
   // test syntax
   const plain = "abcdefghijklmnopqrstuvwxyz"
   const cipher = `${plain.slice(key)}${plain.slice(0, key)}`
   let ciphered = ''

   for (const c of string) {

      if (plain.indexOf(c.toLowerCase()) == -1 && !plain.includes(c)){
         ciphered += c
         continue
      }

      const i = c === c.toUpperCase() ? plain.toUpperCase().indexOf(c) : plain.indexOf(c)
      ciphered += c === c.toUpperCase() ? cipher[i].toUpperCase() : cipher[i]
   }

   return ciphered
}

module.exports = caesarCipher