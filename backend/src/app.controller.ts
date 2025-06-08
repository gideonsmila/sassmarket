import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('api')
export class AppController {
  constructor(private readonly db: DatabaseService) {}

  @Get('categories')
  async getCategories() {
    const { rows } = await this.db.query('SELECT * FROM categories');
    return rows;
  }

  @Get('tools')
  async getTools() {
    const { rows } = await this.db.query('SELECT * FROM tools');
    return rows;
  }

  @Get('tools/:id')
  async getTool(@Param('id') id: string) {
    const { rows } = await this.db.query('SELECT * FROM tools WHERE id = $1', [id]);
    const tool = rows[0];
    const reviews = await this.db.query('SELECT * FROM reviews WHERE tool_id = $1', [id]);
    return { ...tool, reviews: reviews.rows ?? reviews };
  }

  @Post('tools/:id/reviews')
  async addReview(
    @Param('id') id: string,
    @Body('userId') userId: number,
    @Body('rating') rating: number,
    @Body('comment') comment: string,
  ) {
    const { rows } = await this.db.query(
      'INSERT INTO reviews (tool_id, user_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
      [id, userId, rating, comment],
    );
    return rows[0];
  }
}
