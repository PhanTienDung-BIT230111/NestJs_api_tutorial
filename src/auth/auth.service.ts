import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";


@Injectable({})
export class AuthService{
  constructor(private prismaService:PrismaService){

  }

  login(){
    return "Login successful"
  }

  signup(dto: AuthDto){
    console.log('helolo')
  }
}