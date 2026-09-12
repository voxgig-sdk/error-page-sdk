import { ErrorPageEntityBase } from '../ErrorPageEntityBase';
import type { ErrorPageSDK } from '../ErrorPageSDK';
import type { Control } from '../types';
import type { TechnologyDetection, TechnologyDetectionListMatch } from '../ErrorPageTypes';
declare class TechnologyDetectionEntity extends ErrorPageEntityBase<TechnologyDetection> {
    constructor(client: ErrorPageSDK, entopts: any);
    make(this: TechnologyDetectionEntity): TechnologyDetectionEntity;
    list(this: any, reqmatch?: TechnologyDetectionListMatch, ctrl?: Control): Promise<TechnologyDetectionEntity[]>;
}
export { TechnologyDetectionEntity };
