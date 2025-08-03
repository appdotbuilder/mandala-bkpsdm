<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('asset_leases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('asset_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('borrower_name');
            $table->date('borrow_date');
            $table->date('return_deadline');
            $table->date('actual_return_date')->nullable();
            $table->enum('status', ['aktif', 'dikembalikan', 'terlambat'])->default('aktif');
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->index('borrow_date');
            $table->index('return_deadline');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_leases');
    }
};