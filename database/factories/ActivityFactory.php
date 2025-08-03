<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Activity>
 */
class ActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            'description' => fake()->paragraph(),
            'date' => fake()->dateTimeBetween('-1 month', '+3 months'),
            'location' => fake()->randomElement(['Aula BKPSDM', 'Ruang Meeting A', 'Ruang Meeting B', 'Gedung Serbaguna']),
            'status' => fake()->randomElement(['direncanakan', 'berlangsung', 'selesai']),
        ];
    }
}