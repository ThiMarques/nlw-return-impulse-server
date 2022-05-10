import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async craete({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
    }
}