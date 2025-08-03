<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAssetLeaseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'asset_id' => 'required|exists:assets,id',
            'borrower_name' => 'required|string|max:255',
            'borrow_date' => 'required|date',
            'return_deadline' => 'required|date|after_or_equal:borrow_date',
            'actual_return_date' => 'nullable|date',
            'status' => 'required|string|in:aktif,dikembalikan,terlambat',
            'notes' => 'nullable|string',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'asset_id.required' => 'Asset harus dipilih.',
            'asset_id.exists' => 'Asset yang dipilih tidak valid.',
            'borrower_name.required' => 'Nama peminjam harus diisi.',
            'borrow_date.required' => 'Tanggal pinjam harus diisi.',
            'return_deadline.required' => 'Batas waktu kembali harus diisi.',
            'return_deadline.after_or_equal' => 'Batas waktu kembali harus setelah atau sama dengan tanggal pinjam.',
        ];
    }
}