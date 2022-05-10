export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    craete: (data:FeedbackCreateData) => Promise<void>;
}