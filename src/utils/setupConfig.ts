// Node.js built-in modules
import config from 'config'

// Third-party libraries
import { type Options as RateLimitOptions } from 'express-rate-limit'
import logger from './logger.js'
import { type ConnectOptions } from 'mongoose'

// Convert config object to a plain object and then stringify it
const configString = JSON.stringify(config.util.toObject(config), null, 4)

// Log the configs used
logger.info(`Using configs:\n${configString}`)

/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
const AppConfig = {
    relaxedApiLimiterConfig: config.get('apiLimiter.nonSensitive') as RateLimitOptions,
    sensitiveApiLimiterConfig: config.get('apiLimiter.sensitive') as RateLimitOptions,
    expressPort: config.get('expressPort') as number,
    mongooseOpts: config.get('mongoose.options') as ConnectOptions,
    maxRetryAttempts: config.get('mongoose.retrySettings.maxAttempts') as number,
    retryInterval: config.get('mongoose.retrySettings.interval') as number // in milliseconds
}

export default AppConfig