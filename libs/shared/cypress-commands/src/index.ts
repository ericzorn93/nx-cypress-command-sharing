/* eslint-disable @typescript-eslint/no-namespace */
import { getElCommand } from './lib/commands/get-el-command';
import { logMessageCommand } from './lib/commands/log-command';
import { registerCommands } from './lib/register-commands';

registerCommands([getElCommand, logMessageCommand]);
