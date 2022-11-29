import { User } from "src/user/entities/user.entity";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "registered_time" })
export class RegisteredTime {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(() => User, (user) => user.registeredTimes)
    user: User;

    @CreateDateColumn({ name: "time_registered" })
    timeRegistered: string;
    
}
