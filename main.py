import face_recognition

known_image = face_recognition.load_image_file("biden.jpg")
unknown_image = face_recognition.load_image_file("unknown.jpg")
unknown_image2 = face_recognition.load_image_file("unknown2.jpg")

biden_encoding = face_recognition.face_encodings(known_image)[0]
unknown_encoding = face_recognition.face_encodings(unknown_image)[0]
unknown_encoding2 = face_recognition.face_encodings(unknown_image2)[0]

results = face_recognition.compare_faces([biden_encoding], unknown_encoding)
results2 = face_recognition.compare_faces([biden_encoding], unknown_encoding2)

print(results)
print(results2)