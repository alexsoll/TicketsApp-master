import {CredentialsModel} from "./credentials.model";
import {DetailedUserModel} from "./user-details.model";

export interface FeedbackModel {
    _id?: string;
    title: string;
    description: string;
    authorId: DetailedUserModel;
}

export interface FeedbackState {
    feedbacks: FeedbackModel[];
    credentials: CredentialsModel;
}
