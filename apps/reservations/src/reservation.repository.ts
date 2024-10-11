import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Reservation } from './models/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ReservationRepository extends AbstractRepository<Reservation> {
  protected readonly logger = new Logger(ReservationRepository.name);

  constructor(
    @InjectRepository(Reservation)
    reservationsRepository: Repository<Reservation>,
    entityManager: EntityManager,
  ) {
    super(reservationsRepository, entityManager);
  }
}
