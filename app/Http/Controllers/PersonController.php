<?php

namespace App\Http\Controllers;

use App\Models\Person;

class PersonController extends Controller
{
    public function __invoke()
    {
        $persons = Person::all();
        return $persons;
    }
}
