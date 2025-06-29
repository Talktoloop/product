import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ivrr_call')
export class IvrrCallEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({
    type: 'varchar',
    name: 'twilio_call_sid',
  })
  twilioCallSid: string;

  @Column({
    type: 'int',
    name: 'recording_duration',
  })
  recordingDuration: number;
}
