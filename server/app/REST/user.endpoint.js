import business from '../business/business.container';
import applicationException from '../service/applicationException';
import admin from '../middleware/admin';
import auth from '../middleware/auth';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operacje związane z użytkownikami
 */

const userEndpoint = (router) => {
    /**
     * @swagger
     * /api/user/auth:
     *   post:
     *     summary: Autentykacja użytkownika
     *     tags: [Users]
     *     requestBody:
     *       description: Dane autentykacyjne użytkownika
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               login:
     *                 type: string
     *               password:
     *                 type: string
     *     responses:
     *       200:
     *         description: Pomyślna autentykacja
     *       500:
     *         description: Wewnętrzny błąd serwera
     */
    router.post('/api/user/auth', async (request, response, next) => {
        try {
            let result = await business.getUserManager(request).authenticate(request.body.login, request.body.password);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    /**
     * @swagger
     * /api/user/create:
     *   post:
     *     summary: Utwórz lub zaktualizuj użytkownika
     *     tags: [Users]
     *     requestBody:
     *       description: Obiekt użytkownika do utworzenia lub zaktualizowania
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               // Dodaj swoje właściwości użytkownika
     *     responses:
     *       200:
     *         description: Pomyślna operacja
     *       500:
     *         description: Wewnętrzny błąd serwera
     */
    router.post('/api/user/create', async (request, response, next) => {
        try {
            const result = await business.getUserManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    /**
     * @swagger
     * /api/user/logout/{userId}:
     *   delete:
     *     summary: Wyloguj użytkownika
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: userId
     *         required: true
     *         description: ID użytkownika do wylogowania
     *         schema:
     *           type: string
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Pomyślna operacja
     *       500:
     *         description: Wewnętrzny błąd serwera
     */
    router.delete('/api/user/logout/:userId', auth, async (request, response, next) => {
        try {
            let result = await business.getUserManager(request).removeHashSession(request.body.userId);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};

export default userEndpoint;
