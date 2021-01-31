import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate} from "typeorm";
import bcrypt from "bcrypt";

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	username: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword(){
		this.password = bcrypt.hashSync(this.password, 10)
	}
	
}

export default User;
