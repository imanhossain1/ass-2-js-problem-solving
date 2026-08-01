খুব ভালো প্রশ্ন। একজন ভালো programmer আগে **pseudocode** লিখে, তারপর code লিখে।

---

## Problem 1 — `calculateTotal`

### Pseudocode

```text
START

Input cart

If input is not an array
    Return "Invalid"

If array is empty
    Return 0

Create total = 0

Loop through every product
    Add product.price to total

Return total

END
```
input shop 
if input is not an array 
rerurn "invalid"
 
if array is empty 
reurn 0 

create total = 0;

loop through every product 
add product.price  to total 

return total 







### Logic (সহজ ভাষায়)

* Array কিনা?
* Empty নাকি?
* `total = 0`
* প্রতিটি object-এর `price` যোগ করো।
* Total return করো।

---

## Problem 2 — `findYoungest`

### Pseudocode

```text
START

Input people

If input is not an array
    Return "Invalid"

If array is empty
    Return "No Data"

Set youngest = first object

Loop through every person
    If person's age is less than youngest age
        Update youngest

Return youngest.name

END
```
input people 
if people is not an array 
reurn  "inpulid"

if array is empty 
reurn "no data"

set yongest = first Object 

loop through every person 
if person's age is less than youngest age 
update youngest 
reuntr youngest.name 


### Logic (সহজ ভাষায়)

* Array কিনা?
* Empty নাকি?
* প্রথম মানুষকেই সবচেয়ে ছোট ধরে নাও।
* সবার age-এর সাথে compare করো।
* যদি আরও ছোট age পাও, তাকে `youngest` বানাও।
* শেষে তার `name` return করো।

---

### মনে রাখার Formula

প্রায় সব Array Problem-এর logic এমন হয়:

```text
1. Input Check
2. Empty Check
3. Initial Value
4. Loop
5. Compare / Calculate / Update
6. Return Result
```

এভাবে pseudocode লিখার অভ্যাস করলে coding অনেক সহজ হয়ে যাবে।
