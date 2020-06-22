import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
class People {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum')
  type: Enumerator;

  @Column('string')
  name: string;

  @Column('uniqueidentifier')
  document: string;

  @Column('time with time zone')
  created_at: Date;

  @Column('time with time zone')
  updated_at: Date;
}

export default People;
