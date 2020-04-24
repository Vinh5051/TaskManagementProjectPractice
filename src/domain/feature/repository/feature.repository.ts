import { EntityRepository, Repository } from 'typeorm';
import {Feature} from '../entities';

@EntityRepository(Feature)
export class FeatureRepository extends Repository<Feature> {

}
