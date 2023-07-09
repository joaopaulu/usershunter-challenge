import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  first: string;

  @Column()
  last: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  picture: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  postcode: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
