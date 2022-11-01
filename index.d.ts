/**
 * @param amount The amount of time to wait in milliseconds.
 * @return A promise that gets resolved after a given amount.
 */
declare function wait(amount?: number): Promise<void>;

export = wait
