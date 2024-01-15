import business from '../business/business.container';

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Operacje związane z postami
 */

const postEndpoint = (router) => {
    /**
     * @swagger
     * /api/posts:
     *   get:
     *     summary: Pobierz wszystkie posty
     *     tags: [Posts]
     *     responses:
     *       200:
     *         description: Pomyślna operacja
     *       500:
     *         description: Wewnętrzny błąd serwera
     */
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    /**
     * @swagger
     * /api/posts/{id}:
     *   get:
     *     summary: Pobierz post według ID
     *     tags: [Posts]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID posta
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Pomyślna operacja
     *       404:
     *         description: Post o podanym ID nie został znaleziony
     *       500:
     *         description: Wewnętrzny błąd serwera
     */
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

    /**
     * @swagger
     * /api/post:
     *   post:
     *     summary: Utwórz lub zaktualizuj post
     *     tags: [Posts]
     *     requestBody:
     *       description: Obiekt posta
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               // Tutaj dodaj swoje właściwości
     *     responses:
     *       200:
     *         description: Pomyślna operacja
     *       500:
     *         description: Wewnętrzny błąd serwera
     */
    router.post('/api/post', async (request, response, next) => {
        try {
            let result = await business.getPostManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    /**
     * @swagger
     * /api/posts/{id}:
     *   delete:
     *     summary: Usuń post według ID
     *     tags: [Posts]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID posta do usunięcia
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Pomyślna operacja
     *       404:
     *         description: Post o podanym ID nie został znaleziony
     *       500:
     *         description: Wewnętrzny błąd serwera
     */
    router.delete('/api/posts/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await business.getPostManager().remove(id);
            if (result) {
                res.status(200).send(result);
            } else {
                res.status(404).send('Post not found');
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('Wystąpił błąd');
        }
    });
};

export default postEndpoint;
