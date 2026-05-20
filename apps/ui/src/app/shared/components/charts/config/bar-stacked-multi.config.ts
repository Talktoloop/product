import { chartConfig as baseConfig } from '@app/shared/components/charts/config/bar-stacked.config';
import { chartDefaults } from '@app/shared/components/charts/config/defaults.config';
import { EChartsOption } from 'echarts';
import { cloneDeep, merge } from 'lodash';
export const chartConfig: Partial<EChartsOption> = merge(cloneDeep(chartDefaults), cloneDeep(baseConfig));
