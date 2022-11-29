import { RegisteredTime } from "src/registered_time/entities/registered_time.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class User {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @OneToMany(() => RegisteredTime, (registeredTime) => registeredTime.user)
    registeredTimes: RegisteredTime[];

    
}
