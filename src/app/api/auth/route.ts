// export default async function handler(req, res) {
//     if (req.status !== 'POST') {
//         res.status(405).send({ error: true, message: 'Only POST' })
//     }

//     const { email, password } = req.body;
//     // Ваша функция для валидации

//     const validate = (email: string, password: string) => {
//         const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

//         if(EMAIL_REGEXP.test(email) === false || password.length < 6) {
//             res.status(400).send({ error: true, message: 'Email or password are incorrect' });
//         } else {
//             res.status(200).send({ success: true, message: 'Sucsessfuly entered', token: 'testToken' });
//         }


//     }
//     validate(email, password)
// }

// export async function POST(req, res) {
//     const { email, password } = req.body;
//     // Ваша функция для валидации

//     const validate = (email: string, password: string) => {
//         const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

//         if(EMAIL_REGEXP.test(email) === false || password.length < 6) {
//             res.status(400).send({ error: true, message: 'Email or password are incorrect' });
//         } else {
//             res.status(200).send({ success: true, message: 'Sucsessfuly entered', token: 'testToken' });
//         }


//     }
//     validate(email, password)
   
//   }