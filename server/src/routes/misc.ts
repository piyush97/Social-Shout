import { Router, Request, Response } from 'express';
import auth from '../middleware/auth';
import User from '../entities/User';
import Post from '../entities/Post';
import Vote from '../entities/Vote';
import Comment from '../entities/Comment';

const router = Router();

const vote = async (req: Request, res: Response) => {
    const { identifier, slug, commentIdentifier, value } = req.body;
    if (![-1, 0, 1].includes(value)) {
        return res.status(400).json({ value: 'Value must be -1, 0 or 1' });
    }
    try {
        const user: User = res.locals.user;
        const post = await Post.findOneOrFail({ identifier, slug });
        let vote: Vote | undefined;
        let comment: Comment | undefined;

        if (commentIdentifier) {
            comment = await Comment.findOneOrFail({ identifier: commentIdentifier });
            vote = await Vote.findOne({ user, comment });
        } else {
            vote = await Vote.findOne({ user, post });
        }
        if (!vote && value === 0) {
            return res.status(404).json({ error: 'Vote not found' });
        } else if (!vote) {
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
};

router.post('/vote', auth, vote);

export default router;
