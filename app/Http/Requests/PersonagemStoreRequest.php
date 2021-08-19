<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class PersonagemStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:50'],
            'species' => ['required', 'max:50'],
            'image' => ['required', 'max:200'],
            'url' => ['nullable', 'max:100'],
            'gender' => ['required', 'max:200'],
            'location' => ['required', 'max:200'],
        ];
    }
}
