import DataMapperService from './data-mapper-service';
import { DataMapperServiceInterface } from './data-mapper-service-interface';
import { diContainer, types} from './../dependency-injection';

import * as mappers from './mappers';
import { MapperInterface } from './mapper-interface';

diContainer.bind<DataMapperServiceInterface>(types.DataMapperService).to(DataMapperService).inSingletonScope();
diContainer.bind<MapperInterface[]>(types.RepositoryMapper).toConstantValue(mappers.reposMappers);
diContainer.bind<MapperInterface[]>(types.CommitsMapper).toConstantValue(mappers.commitsMappers);

export {
    DataMapperServiceInterface,
    DataMapperService,
    MapperInterface
};
