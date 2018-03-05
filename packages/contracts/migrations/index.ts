import { deployer } from '../test/utils/deployer';

import { runMigrationsAsync } from './migrate';

runMigrationsAsync(deployer);
