import business from '../business/business.container';

const postEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/posts/:id', async (request, response, next) => {
        try {
            let postId = request.params.id;
            let result = await business.getPostManager().get(postId);
            if (result) {
                response.status(200).send(result);
            } else {
                response.status(404).send('Post not found');
            }
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/post', async (request, response, next) => {
        try {
            let result = await business.getPostManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
    router.delete('/api/posts/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await business.getPostManager().remove(id);
            if (result) {
                res.status(200).send(result);
            } else {
                res.status(404).send('Recipe not found');
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('An error occurred');
        }
    });

};
export default postEndpoint;
