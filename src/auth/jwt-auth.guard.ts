import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}


// Then, apply this guard to any route you want to protect. For example, in a protected controller:

// import { Controller, Get, UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';

// @Controller('protected')
// export class ProtectedController {
//   @UseGuards(JwtAuthGuard)
//   @Get()
//   getProtectedData() {
//     return { message: 'This is protected data' };
//   }
// }

// login logic

// const login = async (email, password) => {
//     const response = await fetch('http://localhost:3000/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });
  
//     const data = await response.json();
//     if (data.access_token) {
//       localStorage.setItem('token', data.access_token);
//     }
//   };
  

// proteected route logic

// const token = localStorage.getItem('token');
// const response = await fetch('http://localhost:3000/protected', {
//   headers: {
//     'Authorization': `Bearer ${token}`,
//   },
// });
// const data = await response.json();
// console.log(data);
