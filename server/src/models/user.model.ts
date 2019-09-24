import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    active: boolean;
}
