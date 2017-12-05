var input = `2
1
2
-2
0
0
-5
0
-3
-5
-8
-2
-1
-2
-1
-9
-10
1
-11
-5
-9
-7
-13
-19
-22
1
0
-3
2
-9
-4
-5
-15
-13
-30
-21
-4
0
-34
0
-31
0
-29
-42
-1
2
-24
-16
-16
-12
-22
-37
-16
-34
-46
-12
-53
-12
-23
-44
-1
-29
-9
-52
-17
-30
-60
-5
-29
-26
-48
-55
-10
0
-50
-1
-8
2
-37
-74
-63
-39
-7
-81
-33
-62
-59
-20
-58
-54
-23
-19
-80
-39
0
0
-92
-75
-24
0
-73
-36
-14
1
-102
-97
-30
-105
-99
-84
-46
-67
-88
-86
-94
-53
-88
0
-100
-86
-11
-93
-99
-21
-2
-108
-6
0
-113
-116
-127
-42
-131
-124
-24
-56
-63
-130
-118
-52
-139
-43
-90
-123
-7
-93
-117
-34
-59
-140
-103
-52
-115
-83
-42
-92
-48
-82
-104
-38
-2
-28
-150
-39
-30
-71
-146
-55
-114
-141
-158
-55
-21
-121
-142
-137
-119
-99
-113
-99
-33
-99
-20
-129
-83
-64
-179
-182
-43
-86
-50
-135
-186
-68
-100
-181
-22
-106
-178
-157
-46
-41
-80
-166
-77
-81
-144
-132
-81
-11
-38
-57
-69
-13
-79
-146
-1
-165
-52
-134
-86
-160
-97
-220
-92
-200
-145
-175
-138
-205
-127
-165
-155
-211
-134
-31
-118
-190
-40
-182
-96
-134
-93
-84
-76
-34
-33
-203
-16
-245
-167
-102
-5
-44
-239
-127
-255
-116
-61
-140
-238
-69
-254
-203
-178
-229
-250
-120
-109
-153
-108
-137
-247
2
-151
-270
-164
-62
-186
-272
-190
-180
-70
-179
-38
-208
-215
-151
-156
-62
-57
-275
-182
-169
-264
-70
-279
-55
-287
-57
-3
-67
-155
-213
-17
2
-200
-291
-179
-175
-73
-257
-47
-118
-206
-93
-293
-199
-102
-118
-188
-66
-288
-21
-204
-80
-237
-175
-297
-235
-168
-262
2
-162
-95
1
-286
-318
-9
-213
-159
-127
-175
-266
-240
-268
-245
-196
-281
-86
-202
-127
-144
-157
-333
-122
-230
-182
-38
-296
-12
-224
-123
-40
-6
-324
-135
-289
-85
-179
-37
-58
-125
-228
-124
-250
-73
-35
-286
-267
-257
-348
-83
-3
-98
-99
-273
-118
-310
-23
-299
-96
-51
-273
-79
-112
-355
-48
-219
-10
-103
-18
-201
-108
-34
-362
-165
-359
-347
-157
-148
-20
-344
-66
-337
-387
-62
-125
-4
-355
-322
-263
-381
-108
-25
-262
-425
-100
-54
-315
-221
-268
-211
-321
-89
-124
-297
-22
-162
-117
-430
-152
-373
-256
-37
-61
-59
-436
-377
-346
-245
-167
-451
-392
-382
-248
-254
-382
-249
-267
-216
-205
-310
-326
-144
-107
-65
-382
-79
-401
-370
-221
-283
-269
-64
-207
-262
-181
-146
-52
-169
-147
-225
-179
-215
-116
-115
-37
-227
-250
-228
-132
-414
-425
-230
-224
-319
-42
-353
-285
-38
-145
-263
-25
-142
-296
-267
-43
-315
-352
-105
-275
-354
-66
-414
-464
-215
-107
-267
-394
-10
-27
-315
-286
-113
-454
-400
-468
-245
-18
-427
-479
-281
-43
-29
-15
-371
-127
-371
-251
-343
-267
-355
-271
-68
-454
-532
-264
-513
-170
-484
-85
-329
-389
-317
-382
-535
-169
-395
-53
-429
-394
-465
-250
-419
-434
-84
-130
-229
-496
-336
-388
-412
-123
-502
-205
-367
-224
-40
-551
-99
-394
-321
-515
-260
-410
-518
-22
-23
-259
-397
-306
-199
-157
-49
-298
-176
-564
-271
-6
-297
-514
-432
-455
-192
-95
-447
-237
-571
-543
-229
-405
-282
-235
-380
-25
-603
-335
-94
-533
-463
-396
-421
-393
-588
-376
-152
-328
-460
-90
-315
-533
-207
-590
-100
-588
-574
-259
-183
-522
-424
-272
-341
-443
-217
-143
-26
-196
-632
-520
-606
-277
-176
-547
-564
-444
-228
-223
-115
-200
-616
-576
-398
-157
-78
-586
-12
-650
-239
-152
-20
-366
-100
-478
-666
-247
-105
-230
-218
-48
-238
0
-387
-660
-542
-189
-339
-577
-527
-273
-565
-230
-578
-147
-106
-373
-513
-8
-465
-66
-408
-351
-357
-119
-251
-626
-81
-575
-542
-193
-219
-189
-635
-77
-517
-608
-309
-716
-712
-287
-67
-312
-334
-584
-687
-488
-612
-42
-180
-726
-235
-606
-538
-470
-477
-504
-278
-24
-435
-610
-540
-646
-503
-151
-350
-43
-699
-459
-516
-424
-343
-297
-460
-592
-30
-614
-125
-425
-180
-73
-550
-361
-390
-380
-518
-418
-305
-326
-84
-675
-320
-557
-486
-457
-414
-69
-228
-683
-610
-188
-608
-480
-225
-186
-374
-256
-672
-145
-323
-453
-252
-214
-600
-49
-652
-593
-93
-42
-101
-600
-422
-146
-191
-474
-725
-568
-572
-498
-506
-702
-120
-210
-340
-482
-210
-666
-520
-647
-219
-435
-455
-814
-304
-610
-224
-95
-425
-456
-761
-339
-256
-793
-49
-317
-274
-374
-620
-730
-130
-128
-420
-315
-47
-92
-467
-269
-563
-495
-501
-32
-755
-774
-154
1
-685
-657
-38
-727
-428
-293
-68
-203
-850
-775
-545
-740
-683
-728
-502
-520
-44
-53
-826
-555
-539
-291
-435
-673
-865
-114
-467
-679
-598
-611
-566
-606
-320
-124
-430
-240
-85
-549
-847
-481
-444
-792
-695
-405
-427
-292
-533
-91
-5
-546
-181
-156
-488
-29
-17
-572
-510
-663
-321
-177
-516
-85
-829
-109
-236
-876
-141
-427
-180
-576
-45
-178
-6
-236
-381
-638
-144
-391
-739
-43
-898
-896
-395
-280
-712
-127
-823
-130
-783
-324
-29
-136
-941
-816
-712
-120
-639
-209
-522
-618
-205
-557
-153
-451
-280
-214
-683
-134
-329
-403
-156
-645
-194
-811
-377
-161
-620
-920
-225
-632
-543
-658
-864
-137
-928
-616
-728
-145
-182
-879
-595
-598
-409
-934
-23
-58
-301
-427
-599
-562
-373
-656
-360
-783
-68
-228
-712
-912
-260
-490
-588
-481
-610
-615
-180
-914
-960
-462
-522
-782
-617
-687
-477
-934
-54
-201
-279
-101
-27
-759
-407
-187
-202
-715
-488
-206
-802
-737
-18
-364
-325
-155
-573
-536
-769
-747
-669
-856
-521
-24
-921
-394
-726
-251
-5
-533
-923
-752
-28
-775
-100
-801
-22
-723
-383
-952
-355
-1058
-975
-975
-706
-843
-75
-124
-150
-98
-1019
-195
-342
-915`;

var sample = `0
3
0
1
-3`;

doIt(sample);
doIt(input);

doItAgain(sample);
doItAgain(input);

function doIt(data) {

    data = data.split("\n");
    var steps = 0;
    var currentPos = 0;

    while(data[currentPos] !== undefined) {
        var instruction = parseInt(data[currentPos]);

        if (data[currentPos] !== undefined) {
            data[currentPos] = parseInt(instruction + 1);
            steps++;
        }

        currentPos += instruction;
    }

    console.log('\n' + steps);
};

function doItAgain(data) {

    data = data.split("\n");
    var steps = 0;
    var currentPos = 0;

    while(data[currentPos] !== undefined) {
        var instruction = parseInt(data[currentPos]);

        if (data[currentPos] !== undefined) {

            if (instruction >= 3) {
                data[currentPos] = parseInt(instruction - 1);
            } else {
                data[currentPos] = parseInt(instruction + 1);
            }

            steps++;
        }

        currentPos += instruction;
    }

    console.log('\n' + steps);
};