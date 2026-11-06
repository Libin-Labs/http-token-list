import * as api from '@lp-labs/http-token-list';
import { parseTokenList, formatTokenList } from '@lp-labs/http-token-list';
console.log(formatTokenList(parseTokenList('gzip, br')));
// @ts-expect-error invalid argument must be rejected by declarations
api.parseTokenList(4);
